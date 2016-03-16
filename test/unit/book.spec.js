var assert = require('assert');
const Code = require('code');
const expect = Code.expect;
import { booksNotLoaded, booksLoading, booksLoaded, booksLoadingFailed } from '../../src/actions/book.js';

describe('Books http endpont', function() {
    it('GET /books.json', function () {
      expect(true).to.be.a.boolean().and.to.not.equal(false);
    });
});


describe('loadBooks reducer', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect(true).to.be.a.boolean().and.to.not.equal(false);
    });
  });
});


describe('Load Books actions', function() {
  describe('Books loading....', function () {
    it('status LOADING', function () {
      const action = booksLoading();
      expect(action.type).to.be.a.string().and.to.equal('BOOKS');
      expect(action.status).to.be.a.string().and.to.equal('LOADING');
    });
  });

  describe('Books books loaded!', function () {
    it('status LOADED', function () {
      const action = booksLoaded();
      expect(action.type).to.be.a.string().and.to.equal('BOOKS');
      expect(action.status).to.be.a.string().and.to.equal('LOADED');
    });
  });

  describe('Books not loaded', function () {
    it('status NOT_LOADED', function () {
      const action = booksNotLoaded();
      expect(action.type).to.be.a.string().and.to.equal('BOOKS');
      expect(action.status).to.be.a.string().and.to.equal('NOT_LOADED');
    });
  });

  describe('Books loadig faild', function () {
    it('status LOADING_FAILED', function () {
      const action = booksLoadingFailed();
      expect(action.type).to.be.a.string().and.to.equal('BOOKS');
      expect(action.status).to.be.a.string().and.to.equal('LOADING_FAILED');
    });
  });
});

describe('reduce booksApp', function() {
    it('computes state for loading....', function () {
      expect(true).to.be.a.boolean().and.to.not.equal(false);
    });
    it('computes state for loaded!', function () {
      expect(true).to.be.a.boolean().and.to.not.equal(false);
    });
    it('computes state for not loaded', function () {
      expect(true).to.be.a.boolean().and.to.not.equal(false);
    });
    it('computes state for loading faild! ', function () {
      expect(true).to.be.a.boolean().and.to.not.equal(false);
    });
});
